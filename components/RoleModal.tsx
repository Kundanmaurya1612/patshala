import { useEffect, useState } from "react";

interface RoleModalProps {
  onSelect: (role: "student" | "teacher") => void;
}

const RoleModal: React.FC<RoleModalProps> = ({ onSelect }) => {
  const [open, setOpen] = useState(true);

  const handleSelect = (role: "student" | "teacher") => {
    onSelect(role);
    setOpen(false);
    localStorage.setItem("userRole", role);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-lg p-8 shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4 text-black">Who are you?</h2>
        <div className="flex gap-6 justify-center">
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => handleSelect("student")}
          >
            Student
          </button>
          <button
            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            onClick={() => handleSelect("teacher")}
          >
            Teacher
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleModal;
