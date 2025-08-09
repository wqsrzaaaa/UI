import React, { useRef, useState } from 'react';

const UseruseTool = () => {
  const [inputType, setInputType] = useState('file'); // 'file' or 'text'
  const [document, setDocument] = useState(null);
  const [pastedText, setPastedText] = useState('');
  const [summary, setSummary] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const fileRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputType === 'file' && !document) {
      alert('Please upload a document.');
      return;
    }

    if (inputType === 'text' && pastedText.trim() === '') {
      alert('Please paste some text.');
      return;
    }

    // Simulate summarization
    const summaryText = inputType === 'file'
      ? `Summary of uploaded file: ${document.name}`
      : `Summary of pasted text: ${pastedText.slice(0, 100)}...`;

    setSummary(summaryText);
    setSubmitted(true);
  };

  const handleDownload = (type) => {
    const blob = new Blob([summary], {
      type: type === 'pdf' ? 'application/pdf' : 'application/msword',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = type === 'pdf' ? 'summary.pdf' : 'summary.doc';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <h2 className="text-2xl font-bold text-center py-4 bg-white shadow">🧠 Text Summarizer Tool</h2>

      <div className="flex flex-1 transition-all duration-500">
        {/* Input Side */}
        <div className={`transition-all duration-500 p-6 bg-white shadow ${submitted ? 'w-1/5' : 'w-4/5'}`}>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Type Toggle */}
            <div className="flex gap-4 mb-4">
              <button
                type="button"
                className={`px-4 py-2 border rounded ${inputType === 'file' ? 'bg-blue-600 text-white' : 'bg-white'}`}
                onClick={() => setInputType('file')}
              >
                Upload File
              </button>
              <button
                type="button"
                className={`px-4 py-2 border rounded ${inputType === 'text' ? 'bg-blue-600 text-white' : 'bg-white'}`}
                onClick={() => setInputType('text')}
              >
                Paste Text
              </button>
            </div>

            {/* File Input */}
            {inputType === 'file' && (
              <>
                <input
                  ref={fileRef}
                  type="file"
                  className="hidden"
                  onChange={(e) => setDocument(e.target.files[0])}
                />
                <div
                  onClick={() => fileRef.current.click()}
                  className="w-full h-12 cursor-pointer flex items-center pl-2 border border-zinc-400"
                >
                  {document ? document.name : 'Click to upload file'}
                </div>
              </>
            )}

            {/* Pasted Text Input */}
            {inputType === 'text' && (
              <textarea
                value={pastedText}
                onChange={(e) => setPastedText(e.target.value)}
                placeholder="Paste your text here..."
                className="w-full border p-2 h-40"
              ></textarea>
            )}

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Result Side */}
        <div className={`transition-all duration-500 p-6 ${submitted ? 'w-4/5' : 'w-1/5'} bg-gray-50`}>
          {submitted ? (
            <div>
              <h3 className="text-xl font-semibold mb-3">📄 Summary</h3>
              <p className="border p-4 rounded bg-white text-gray-800 mb-4 whitespace-pre-wrap">
                {summary}
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => handleDownload('doc')}
                  className="bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700"
                >
                  Download as DOC
                </button>
                <button
                  onClick={() => handleDownload('pdf')}
                  className="bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700"
                >
                  Download as PDF
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-400 mt-20">Submit something to see the summary here.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UseruseTool;
