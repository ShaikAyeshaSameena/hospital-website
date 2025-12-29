import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function AppointmentModal({ isOpen, onClose }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">

                <Dialog.Title className="text-xl font-semibold mb-4">
                  Book Appointment
                </Dialog.Title>

                {/* FORM */}
                <form className="space-y-4">

                  {/* 2 columns */}
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" className="border p-2 rounded" />
                    <input type="text" placeholder="Last Name" className="border p-2 rounded" />
                  </div>

                  {/* Email full width */}
                  <input type="email" placeholder="Email" className="border p-2 rounded w-full" />

                  {/* Phone */}
                  <input type="tel" placeholder="Phone" className="border p-2 rounded w-full" />

                  {/* Message */}
                  <textarea placeholder="Message" className="border p-2 rounded w-full"></textarea>

                  <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">
                    Submit
                  </button>
                </form>

                <button
                  onClick={onClose}
                  className="absolute top-3 right-4 text-gray-500 hover:text-gray-800"
                >
                  ✕
                </button>

              </Dialog.Panel>
            </Transition.Child>

          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
