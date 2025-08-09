import React, { useRef, useState } from 'react';
import { FaFilePdf, FaFileWord, FaFileAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const MakeMyOwnTool = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    documentType: '',
    inputType: 'file',
    outputType: 'file',
    sampleInputFiles: [],
    sampleOutputFiles: [],
    sampleInputText: '',
    sampleOutputText: '',
    instructions: '',
  });

  const inputRef = useRef();
  const outputRef = useRef();


  const [loading, setLoading] = useState(false);
  const [toolCreated, setToolCreated] = useState(false);

  const inputFileRef = useRef();
  const outputFileRef = useRef();

  const [filePairs, setFilePairs] = useState([]);
  const [pendingInput, setPendingInput] = useState(null);
  const [pendingInputType, setPendingInputType] = useState('file');
  const [inputText, setInputText] = useState('');

  const [pendingOutputType, setPendingOutputType] = useState('file');
  const [outputText, setOutputText] = useState('');
  const [Error, setError] = useState('');

  const getFileExtension = (filename) => filename.split('.').pop().toLowerCase();

  const handleOutputSelect = (e) => {
    if (!pendingInput) {
      setError('Please provide input first.');
      return;
    }

    const outputFile = e.target.files[0];

    if (typeof pendingInput === 'object') {
      const inputExt = getFileExtension(pendingInput.name);
      const outputExt = getFileExtension(outputFile.name);
      if (inputExt !== outputExt) {
        setError(`❌ File types do not match: Input is ${inputExt.toUpperCase()}, Output is ${outputExt.toUpperCase()}`);
        e.target.value = '';
        return;
      }
    }

    setFilePairs((prev) => [...prev, { input: pendingInput, output: outputFile, type: 'file' }]);
    setPendingInput(null);
    setInputText('');
    setError('');
    e.target.value = '';
  };

  const handleTextPairSubmit = () => {
    if (!inputText || !outputText) {
      setError('Both input and output text are required.');
      return;
    }

    if (filePairs.length >= 3) {
      setError('Maximum 3 pairs allowed.');
      return;
    }

    if(formData.documentType !== 'message'){
      setError('please select document type to input text')
      return
    }

    setFilePairs((prev) => [...prev, { input: inputText, output: outputText, type: 'text' }]);
    setInputText('');
    setOutputText('');
    setPendingInput(null);
    setError('');
  };

  const removePair = (index) => {
    const newPairs = [...filePairs];
    newPairs.splice(index, 1);
    setFilePairs(newPairs);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.documentType) {
      setError('Please select a document type.');
      return;
    }

    const allowedExt = getAllowedExtension(formData.documentType);

    if (formData.inputType === 'file') {
      const invalidInput = formData.sampleInputFiles.find(
        (file) => !file.name.toLowerCase().endsWith(allowedExt)
      );
      if (invalidInput) {
        setError(`Invalid input file: ${invalidInput.name}. Expected ${allowedExt}`);
        return;
      }
    }

    if (formData.outputType === 'file') {
      const invalidOutput = formData.sampleOutputFiles.find(
        (file) => !file.name.toLowerCase().endsWith(allowedExt)
      );
      if (invalidOutput) {
        setError(`Invalid output file: ${invalidOutput.name}. Expected ${allowedExt}`);
        return;
      }
    }

    if (
      formData.inputType === 'file' &&
      formData.outputType === 'file' &&
      formData.sampleInputFiles.length !== formData.sampleOutputFiles.length
    ) {
      setError('Sample input and output files must be equal in number.');
      return;
    }

    const payload = new FormData();
    payload.append('documentType', formData.documentType);

    if (formData.inputType === 'file') {
      formData.sampleInputFiles.forEach((file) => {
        payload.append('sampleInput', file);
      });
    } else {
      payload.append('sampleInputText', formData.sampleInputText);
    }

    if (formData.outputType === 'file') {
      formData.sampleOutputFiles.forEach((file) => {
        payload.append('sampleOutput', file);
      });
    } else {
      payload.append('sampleOutputText', formData.sampleOutputText);
    }

    setLoading(true);
    setToolCreated(false);
    setError('');

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setToolCreated(true);
    } catch (err) {
      setError('Something went wrong while creating the tool.');
    } finally {
      setLoading(false)
      setFormData({ ...initialState });
      inputFileRef.current.value = '';
      outputFileRef.current.value = '';
      setToolCreated(true);
    }
  };




  const getAllowedExtension = (type) => {
    switch (type) {
      case 'pdf':
      case 'pdf_with_image':
        return '.pdf';
      case 'docx':
        return '.docx';
      case 'txt':
        return '.txt';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'sampleInput' || name === 'sampleOutput') {
      const selectedFile = files[0];
      const expectedExt = getAllowedExtension(formData.documentType);

      if (!formData.documentType) {
        setError('Please select a document type first.');
        return;
      }

      if (selectedFile && expectedExt && !selectedFile.name.endsWith(expectedExt)) {
        setError(`Invalid file type. Please upload a ${expectedExt} file.`);
        return;
      }

      setFormData({ ...formData, [name]: selectedFile });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const renderIcon = () => {
    switch (formData.documentType) {
      case 'pdf':
      case 'pdf_with_image':
        return <FaFilePdf className="text-red-600 text-3xl" />;
      case 'docx':
        return <FaFileWord className="text-blue-600 text-3xl" />;
      case 'txt':
        return <FaFileAlt className="text-gray-600 text-3xl" />;
      default:
        return null;
    }
  };

  const navigate = useNavigate()


  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className='flex justify-between items-center'>
        <h2 className="text-2xl font-bold mb-4"> Make My Own Tool</h2>
        <button
          onClick={() => navigate(-1)}
          className='bg-[rgb(148,28,30)] text-white py-2 cursor-pointer px-5 rounded '>
          Back
        </button>
      </div>


      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Tool Title:</label>
          <input
            type="text"
            name="title"
            className="w-full p-2 border rounded"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block font-semibold">Tool Describtion:</label>
          <textarea
            type="text"
            name="Describtion"
            className="w-full p-2 border rounded"
            value={formData.Describtion}
            onChange={handleChange}
            required
          />
        </div>

        <label htmlFor="">Document type</label>
        <div className="flex items-center gap-4">
          <select
            name="documentType"
            className="p-2 border rounded w-full"
            value={formData.documentType}
            onChange={(e) => {
              handleChange(e);
              setError('');
            }}
            required
          >
            <option value="">Select Document Type</option>
            <option value="pdf">PDF (No Images)</option>
            <option value="pdf_with_image">PDF with Images</option>
            <option value="txt">Text File</option>
            <option value="message">Text input</option>
            <option value="docx">Word Document</option>
          </select>
          <div>{renderIcon()}</div>
        </div>

        <div className="space-y-6">
          <div className='flex items-center gap-7 md:gap-16 '>
            <div className='w-80'>
              <div className="flex items-center gap-4 mb-2">
                <span className="font-semibold">Sample Input:</span>
                <label>
                  <input
                    type="radio"
                    name="inputType"
                    value="file"
                    checked={pendingInputType === 'file'}
                    onChange={() => {
                      setPendingInputType('file');
                      setPendingInput(null);
                    }}
                  /> File
                </label>
                <label>
                  <input
                    type="radio"
                    name="inputType"
                    value="text"
                    checked={pendingInputType === 'text'}
                    onChange={() => {
                      setPendingInputType('text');
                      setPendingInput(null);
                    }}
                  /> Text
                </label>
              </div>

              {pendingInputType === 'file' ? (
                <>
                  <button
                    type="button"
                    className="text-zinc-600 underline"
                    onClick={() => inputRef.current.click()}
                    disabled={filePairs.length >= 3}
                  >
                    Upload Input File
                  </button>
                  <input
                    type="file"
                    accept=".txt,.pdf,.docx"
                    ref={inputRef}
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files[0];

                      if (!file) return;

                      const ext = file.name.split('.').pop().toLowerCase();
                      if (formData.documentType.length <= 1) {
                        setError("Please enter a valid doc type before uploading.");
                        e.target.value = '';
                        return;
                      }

                      if (ext !== formData.documentType.toLowerCase()) {
                        setError(`File type must match the selected doc type: ${formData.documentType}`);
                        e.target.value = '';
                        return;
                      }

                      setPendingInput(file);
                    }}
                  />
                  {typeof pendingInput === 'object' && pendingInput && (
                    <p className="text-sm text-gray-700 mt-1">
                      Waiting for output pair: <strong>{pendingInput.name}</strong>
                    </p>
                  )}
                </>
              ) : (
                <textarea
                  rows={4}
                  className="w-full border rounded p-2"
                  placeholder="Enter input text"
                  value={inputText}
                  onChange={(e) => {
                    setInputText(e.target.value);
                    setPendingInput(e.target.value);
                  }}
                />
              )}
            </div>

            <div className='w-80'>
              <div className="flex items-center gap-4 mb-2">
                <span className="font-semibold">Sample Output:</span>
                <label>
                  <input
                    type="radio"
                    name="outputType"
                    value="file"
                    checked={pendingOutputType === 'file'}
                    onChange={() => setPendingOutputType('file')}
                    disabled={!pendingInput}
                  /> File
                </label>
                <label>
                  <input
                    type="radio"
                    name="outputType"
                    value="text"
                    checked={pendingOutputType === 'text'}
                    onChange={() => setPendingOutputType('text')}
                    disabled={!pendingInput}
                  /> Text
                </label>
              </div>

              {pendingOutputType === 'file' ? (
                <>
                  <button
                    type="button"
                    className="text-zinc-600 underline"
                    onClick={() => outputRef.current.click()}
                    disabled={!pendingInput}
                  >
                    Upload Output File
                  </button>
                  <input
                    type="file"
                    accept=".txt,.pdf,.docx"
                    ref={outputRef}
                    className="hidden"
                    onChange={handleOutputSelect}
                  />
                </>
              ) : (
                <textarea
                  rows={4}
                  className="w-full border rounded p-2"
                  placeholder="Enter output text"
                  value={outputText}
                  onChange={(e) => setOutputText(e.target.value)}
                  disabled={!pendingInput}
                />
              )}
              {pendingOutputType === 'text' && pendingInputType === 'text' && (
                <h1
                  onClick={handleTextPairSubmit}
                  className="mt-2 px-3 w-28 py-1 bg-blue-600 text-white rounded text-sm"
                >
                  Add Text Pair
                </h1>
              )}
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Uploaded File/Text Pairs:</h3>
          <ul className="space-y-2">
            {filePairs.map((pair, index) => (
              <li
                key={index}
                className="border rounded p-3 flex justify-between items-center"
              >
                <div className="text-sm">
                  <p>
                    <strong>Input:</strong>{' '}
                    {typeof pair.input === 'string'
                      ? <em>{pair.input.slice(0, 80)}{pair.input.length > 60 ? '...' : ''}</em>
                      : pair.input.name}
                  </p>
                  <p>
                    <strong>Output:</strong>{' '}
                    {typeof pair.output === 'string'
                      ? <em>{pair.output.slice(0, 80)}{pair.output.length > 60 ? '...' : ''}</em>
                      : pair.output.name}
                  </p>
                </div>
                <button
                  className="text-red-500 text-xs"
                  onClick={() => removePair(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <label className="block font-semibold">Instructions:</label>
          <textarea
            name="instructions"
            rows="4"
            className="w-full p-2 border rounded"
            value={formData.instructions}
            onChange={handleChange}
            required
          />
        </div>

        <p className='text-red-700'>{Error && Error}</p>

        {loading ? (
          <div className="mt-4 p-4  rounded shadow">
            <p className="">Creating tool...</p>
          </div>
        ) : toolCreated ? (
          <div className="mt-4 p-4 bg-green-100 text-green-800 rounded shadow">
            ✅ Tool Created Successfully!
          </div>
        ) : (
          <div className='flex gap-8'>
            <button
              type="submit"
              className="bg-[rgb(148,28,30)] cursor-pointer text-white px-4 py-2 rounded "
            >
              Create Tool
            </button>
            <div
              onClick={() => {
                if (formData.instructions && formData.instructions.trim().length > 0) {
                  setError('');
                } else {
                  setError('Write instructions to emphasize it.');
                }
              }}
              className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded"
            >
              Write with AI
            </div>
          </div>
        )}

      </form>



    </div>
  );
};

export default MakeMyOwnTool;
