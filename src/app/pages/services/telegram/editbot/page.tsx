"use client";

import { useState, useEffect, useRef } from "react";
import {
  DndContext,
  closestCorners,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
  useDroppable,
  useDraggable,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import {
  FiPlus,
  FiTrash2,
  FiMessageSquare,
  FiImage,
  FiSettings,
  FiMove,
  FiSend,
  FiPaperclip,
} from "react-icons/fi";
import Navbar from "@/app/components/Navbar";

type ElementType = "text" | "button" | "image" | "input" | "user";

interface ElementItem {
  id: string;
  type: ElementType;
  content: string;
  sender: "bot" | "user";
}

interface SortableItemProps {
  id: string;
  element: ElementItem;
  onChange: (id: string, value: string) => void;
  onDelete: (id: string) => void;
}

function SortableItem({ id, element, onChange, onDelete }: SortableItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    transition: transition || "transform 200ms ease",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="group relative bg-white rounded-lg p-4 shadow-md w-full mb-3 border border-gray-200 hover:shadow-lg transition-shadow"
    >
      <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          {...attributes}
          {...listeners}
          className="text-gray-500 hover:text-gray-700 p-1 cursor-grab active:cursor-grabbing"
        >
          <FiMove size={18} />
        </button>
        <button
          onClick={() => onDelete(id)}
          className="text-red-500 hover:text-red-700 p-1"
        >
          <FiTrash2 size={18} />
        </button>
      </div>
      <div className="text-gray-800">
        {element.type === "text" && (
          <textarea
            className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 rounded bg-transparent resize-none"
            value={element.content}
            onChange={(e) => onChange(id, e.target.value)}
            placeholder="Enter text..."
            rows={3}
          />
        )}
        {element.type === "button" && (
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors text-sm font-medium">
            {element.content || "Click Me"}
          </button>
        )}
        {element.type === "image" && (
          <div className="border-2 border-dashed border-gray-300 p-4 text-center rounded-lg bg-gray-50">
            <FiImage className="mx-auto text-gray-400 mb-2 text-2xl" />
            <input
              type="text"
              className="w-full p-2 text-sm text-gray-500 bg-transparent focus:outline-none"
              value={element.content}
              onChange={(e) => onChange(id, e.target.value)}
              placeholder="Enter image URL..."
            />
          </div>
        )}
        {element.type === "input" && (
          <input
            type="text"
            placeholder={element.content || "Input field"}
            className="w-full p-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
            onChange={(e) => onChange(id, e.target.value)}
          />
        )}
      </div>
    </div>
  );
}

function DraggablePaletteItem({
  element,
}: {
  element: { id: string; name: string; icon: React.ReactNode };
}) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: element.id,
    data: { type: element.id, isPaletteItem: true },
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="p-3 border border-gray-200 rounded-lg hover:border-blue-500 cursor-grab active:cursor-grabbing bg-white transition-colors flex items-center gap-3 text-gray-700 text-sm font-medium"
    >
      {element.icon}
      {element.name}
    </div>
  );
}

export default function EditBot() {
  const defaultElements = [
    { id: "text", name: "Text Block", icon: <FiMessageSquare size={18} /> },
    { id: "button", name: "Button", icon: <FiPlus size={18} /> },
    { id: "image", name: "Image", icon: <FiImage size={18} /> },
    { id: "input", name: "Input Field", icon: <FiSettings size={18} /> },
  ];

  const [elements, setElements] = useState<ElementItem[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [chatInput, setChatInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const { setNodeRef, isOver } = useDroppable({ id: "canvas" });

  const sensors = useSensors(useSensor(PointerSensor));

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [elements]);

  const handleDragEnd = (event: DragEndEvent) => {   
    const { active, over } = event;
    const isPaletteItem = active.data.current?.isPaletteItem;

    if (isPaletteItem) {
      const newElement: ElementItem = {
        id: `elem-${Date.now()}`,
        type: active.data.current?.type as ElementType,
        content: active.data.current?.type === "button" ? "Click Me" : "",
        sender: "bot",
      };

      if (over?.id) {
        const overIndex = elements.findIndex((el) => el.id === over.id);
        setElements((prev) => [
          ...prev.slice(0, overIndex),
          newElement,
          ...prev.slice(overIndex),
        ]);
      } else {
        setElements((prev) => [...prev, newElement]);
      }
    } else if (over && active.id !== over.id) {
      const oldIndex = elements.findIndex((el) => el.id === active.id);
      const newIndex = elements.findIndex((el) => el.id === over.id);
      setElements((items) => arrayMove(items, oldIndex, newIndex));
    }

    setActiveId(null);
  };

  const handleDelete = (id: string) => {
    setElements((prev) => prev.filter((el) => el.id !== id));
  };

  const handleChange = (id: string, value: string) => {
    setElements((prev) =>
      prev.map((el) => (el.id === id ? { ...el, content: value } : el))
    );
  };

  const handleSendMessage = () => {
    if (chatInput.trim()) {
      const userMessage = {
        id: `elem-${Date.now()}`,
        type: "user",
        content: chatInput,
        sender: "user",
      };
      setElements((prev) => [...prev, userMessage as ElementItem]);

      if (chatInput.trim().toLowerCase() === "hi") {
        setIsTyping(true);
        setTimeout(() => {
          const botResponse = {
            id: `elem-${Date.now()}`,
            type: "text",
            content: "Hello! How can I help you today?",
            sender: "bot",
          };
          setElements((prev) => [...prev, botResponse as ElementItem]);
          setIsTyping(false);
        }, 1000);
      }

      setChatInput("");
    }
  };

  const getFormattedTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const renderTelegramComponent = (element: ElementItem, index: number) => {
    const isBot = element.sender === "bot";
    const bubbleClass = isBot
      ? "bg-blue-500 text-white self-end"
      : "bg-gray-100 text-gray-800 self-start";

    switch (element.type) {
      case "text":
      case "user":
        return (
          <div
            key={index}
            className={`p-3 rounded-lg max-w-[80%] ${bubbleClass} relative group`}
          >
            <div className="text-sm">
              {element.content
                ? element.content
                : isBot
                ? "No bot message provided"
                : "No user message provided"}
            </div>
            <div className="text-xs opacity-70 mt-1 flex justify-between items-center">
              <span>{isBot ? "Bot" : "You"}</span>
              <span>{getFormattedTime()}</span>
            </div>
          </div>
        );
      case "button":
        return (
          <div
            key={index}
            className={`p-3 rounded-lg max-w-[80%] ${bubbleClass} relative group cursor-pointer hover:bg-blue-600`}
          >
            <div className="text-sm font-medium">
              {element.content ? element.content : "Default Button"}
            </div>
            <div className="text-xs opacity-70 mt-1 flex justify-between items-center">
              <span>Bot</span>
              <span>{getFormattedTime()}</span>
            </div>
          </div>
        );
      case "image":
        return (
          <div
            key={index}
            className={`p-2 rounded-lg max-w-[80%] ${bubbleClass} relative group`}
          >
            {element.content ? (
              <img
                src={element.content}
                alt="Uploaded"
                className="rounded-lg max-w-full h-auto"
                onError={(e) =>
                  (e.currentTarget.src = "/placeholder-image.png")
                }
              />
            ) : (
              <div className="text-sm opacity-70">No image URL provided</div>
            )}
            <div className="text-xs opacity-70 mt-1 flex justify-between items-center">
              <span>Bot</span>
              <span>{getFormattedTime()}</span>
            </div>
          </div>
        );
      case "input":
        return (
          <div
            key={index}
            className={`p-3 rounded-lg max-w-[80%] ${bubbleClass} relative group`}
          >
            <input
              type="text"
              placeholder={element.content || "Type your response..."}
              className="w-full p-2 border border-gray-300 rounded bg-white text-sm text-gray-800"
              disabled
            />
            <div className="text-xs opacity-70 mt-1 flex justify-between items-center">
              <span>Bot</span>
              <span>{getFormattedTime()}</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex-grow p-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">
          Telegram Bot Builder
        </h1>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragStart={({ active }) => setActiveId(active.id as string)}
          onDragEnd={handleDragEnd}
        >
          <div className="flex gap-8">
            {/* Left: Palette */}
            <div className="w-72 bg-white rounded-xl shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4 text-gray-700">
                Elements
              </h2>
              <div className="space-y-3">
                {defaultElements.map((el) => (
                  <DraggablePaletteItem key={el.id} element={el} />
                ))}
              </div>
            </div>

            {/* Center: Canvas */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold mb-4 text-gray-700">
                Canvas
              </h2>
              <div
                ref={setNodeRef}
                className={`h-[600px] p-6 rounded-xl border-2 ${
                  isOver
                    ? "border-blue-500 bg-blue-50"
                    : "border-dashed border-gray-300 bg-white"
                } transition-colors duration-200 shadow-md overflow-y-auto`}
              >
                <SortableContext
                  items={elements.map((el) => el.id)}
                  strategy={verticalListSortingStrategy}
                >
                  <div className="space-y-4 max-w-lg mx-auto">
                    {elements.length === 0 && (
                      <div className="text-center py-12 text-gray-500">
                        Drag elements here to start building your bot
                      </div>
                    )}
                    {elements.map((el) => (
                      <SortableItem
                        key={el.id}
                        id={el.id}
                        element={el}
                        onChange={handleChange}
                        onDelete={handleDelete}
                      />
                    ))}
                  </div>
                </SortableContext>
              </div>
            </div>

            {/* Right: Telegram Preview */}
            <div className="w-96 bg-white border border-gray-200 rounded-xl shadow-md flex flex-col">
              <div className="bg-blue-600 text-white p-4 flex items-center gap-3 rounded-t-xl">
                <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center">
                  <FiMessageSquare size={20} />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">My Bot</h2>
                  <p className="text-xs opacity-70">online</p>
                </div>
              </div>
              <div
                ref={chatContainerRef}
                className="flex-1 overflow-y-auto p-4 bg-[url('/telegram-bg.png')] bg-repeat space-y-3"
                style={{ backgroundColor: "#e5ddd5" }}
              >
                {elements.length === 0 ? (
                  <div className="text-center text-gray-500 py-8">
                    Start building to see the chat preview
                  </div>
                ) : (
                  elements.map((el, index) =>
                    renderTelegramComponent(el, index)
                  )
                )}
                {isTyping && (
                  <div className="bg-gray-100 p-3 rounded-lg self-start max-w-[80%]">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-4 bg-gray-50 border-t border-gray-200 rounded-b-xl">
                <div className="flex items-center gap-2">
                  <button className="text-gray-500 hover:text-gray-700">
                    <FiPaperclip size={20} />
                  </button>
                  <input
                    type="text"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    placeholder="Type a message..."
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  />
                  <button
                    onClick={handleSendMessage}
                    className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                    disabled={!chatInput.trim()}
                  >
                    <FiSend size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <DragOverlay>
            {activeId ? (
              defaultElements.find((el) => el.id === activeId) ? (
                <div className="p-3 border border-blue-500 rounded-lg bg-white shadow-lg flex items-center gap-3 text-sm text-gray-700 opacity-90">
                  {defaultElements.find((el) => el.id === activeId)?.icon}
                  {defaultElements.find((el) => el.id === activeId)?.name}
                </div>
              ) : (
                <div className="bg-white rounded-lg p-4 shadow-lg border border-gray-200 w-full max-w-lg opacity-90">
                  {elements.find((el) => el.id === activeId)?.type ===
                    "text" && (
                    <textarea
                      className="w-full p-2 border-b border-gray-300 bg-transparent"
                      value={elements.find((el) => el.id === activeId)?.content}
                      readOnly
                      rows={3}
                    />
                  )}
                  {elements.find((el) => el.id === activeId)?.type ===
                    "button" && (
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">
                      {elements.find((el) => el.id === activeId)?.content}
                    </button>
                  )}
                  {elements.find((el) => el.id === activeId)?.type ===
                    "image" && (
                    <div className="border-2 border-dashed border-gray-300 p-4 text-center rounded-lg bg-gray-50">
                      <FiImage className="mx-auto text-gray-400 mb-2 text-2xl" />
                      <span className="text-gray-500 text-sm">
                        {elements.find((el) => el.id === activeId)?.content ||
                          "Image Block"}
                      </span>
                    </div>
                  )}
                  {elements.find((el) => el.id === activeId)?.type ===
                    "input" && (
                    <input
                      type="text"
                      placeholder={
                        elements.find((el) => el.id === activeId)?.content ||
                        "Input field"
                      }
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      readOnly
                    />
                  )}
                </div>
              )
            ) : null}
          </DragOverlay>
        </DndContext>
      </div>
    </div>
  );
}
