import { useState } from "react";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button, Input, Modal, Loader } from "../components/ui";

function ComponentDemo() {
  const [modalOpen, setModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 dark:text-white">
          UI Components Demo
        </h1>

        {/* Buttons */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">
            Buttons
          </h2>
          <div className="flex gap-4 flex-wrap">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
            <Button disabled>Disabled</Button>
          </div>
        </div>

        {/* Input */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">Input</h2>
          <Input
            label="Email Address"
            type="email"
            placeholder="your@email.com"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Input label="Error Example" error="This field is required" />
        </div>

        {/* Modal */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">Modal</h2>
          <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
          <Modal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            title="Example Modal"
          >
            <p>
              This is modal content. Press Escape or click outside to close.
            </p>
          </Modal>
        </div>

        {/* Toast */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">Toast</h2>
          <div className="flex gap-4">
            <Button onClick={() => toast.success("Success message!")}>
              Success Toast
            </Button>
            <Button onClick={() => toast.error("Error message!")}>
              Error Toast
            </Button>
          </div>
        </div>

        {/* Loader */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">
            Loader
          </h2>
          <Loader />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ComponentDemo;
