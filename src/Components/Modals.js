import React, { useState } from "react";
import { MdClear } from "react-icons/md";

const Modals = ({ isOpen, onClose }) => {
  const [formCompleted, setFormCompleted] = useState(false);

  const [email, setEmail] = useState('');
  const [uarSelection, setUarSelection] = useState('');
  const [reason, setReason] = useState('');
  const [note, setNote] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    updateFormCompletion();
  };

  const handleUarChange = (e) => {
    setUarSelection(e.target.value);
    updateFormCompletion();
  };

  const handleReasonChange = (e) => {
    setReason(e.target.value);
    updateFormCompletion();
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
    updateFormCompletion();
  };

  const updateFormCompletion = () => {
    setFormCompleted(email && uarSelection && reason && note);
  };

  const buttonClass = formCompleted ? 'bg-[#4643EE] text-white' : 'bg-gray-300 text-gray-700';

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <form className="w-[476px] p-5 h-[465px] bg-[#FFFFFF] rounded-xl flex flex-col gap-5">
            <div className="flex justify-between">
              <p className="text-2xl font-semibold leading-4">Close account</p>
              <p onClick={onClose} className="cursor-pointer text-xl">
                <MdClear />
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-lg text-[#777676]">Email</label>
              <input
                value={email}
                onChange={handleEmailChange}
                className="p-1 border-[2px] border-[#E4E4E4] outline-none rounded-md"
                type="email"
              />
            </div>
            <div className="flex gap-3 items-center">
              <label className="text-lg text-[#777676]">Want to file UAR</label>
              <div className="flex gap-2 items-center">
                <input
                  name="uar"
                  value="Yes"
                  checked={uarSelection === "Yes"}
                  onChange={handleUarChange}
                  type="radio"
                />
                <label className="text-lg text-[#777676]">Yes</label>
                <input
                  name="uar"
                  value="No"
                  checked={uarSelection === "No"}
                  onChange={handleUarChange}
                  type="radio"
                />
                <label className="text-lg text-[#777676]">No</label>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-lg text-[#777676]">Reason</label>
              <input
                value={reason}
                onChange={handleReasonChange}
                className="p-1 border-[2px] border-[#E4E4E4] outline-none rounded-md"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-lg text-[#777676]">Note</label>
              <textarea
                value={note}
                onChange={handleNoteChange}
                className="p-1 border-[2px] border-[#E4E4E4] outline-none rounded-md"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  checked={formCompleted}
                  className="h-4 w-4 text-[#4643EE]"
                  onChange={() => setFormCompleted(!formCompleted)}
                />
                <label className="text-lg text-[#777676]">Closure Fee</label>
              </div>
              <button
                type="submit"
                disabled={!formCompleted}
                className={`p-2 w-[211px] font-semibold rounded-md ${buttonClass}`}
              >
                Close Account
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Modals;
