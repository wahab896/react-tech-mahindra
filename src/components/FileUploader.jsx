import { useState } from "react";
import Papa from 'papaparse';

const FileUploader = ({ onCsvParse }) => {
    const [error, setError] = useState(null);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file && file.type === 'text/csv') {
            Papa.parse(file, {
                header: true,
                skipEmptyLines: true,
                complete: (results) => {
                    const data = results.data;
                    const headers = results.meta.fields;
                    onCsvParse({ data: data, headers })
                    setError(null);
                },
                error: (error) => {
                    setError(error.message);
                    onCsvParse({ data: [], headers: [] });

                }
            });
        } else {
            setError('Please upload a valid CSV file.');
            onCsvParse({ data: [], headers: [] });
        }
    };

    return (
        <div className="flex items-center justify-center w-full my-4">
            <input type="file" id="fileSelect" className="block p-4 w-1/2 text-sm text-gray-900 bg-gray-200 rounded-lg border border-gray-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" onChange={handleFileUpload}
                accept=".csv"></input>
            {error && <div className="text-red-500 mb-4">{error}</div>}
        </div>
    )
}

export default FileUploader