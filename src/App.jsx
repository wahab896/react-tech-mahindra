import { useState } from 'react';
import Dropdown from './components/Dropdown'
import FileUploader from './components/FileUploader'
import Heatmap from './components/Heatmap'

const initialMeasures = { xAxis: "", yAxis: "", cellValue: "" }
function App() {
  const [jsonData, setJsonData] = useState({ data: [], headers: [] });
  const [heatmapValues, setHeatmapValues] = useState(initialMeasures);

  const handleCsvParse = (csvInfo) => {
    setJsonData(csvInfo)
    setHeatmapValues(initialMeasures)
  }

  const changeHeatmapValues = (values) => {
    setHeatmapValues({ ...heatmapValues, ...values });
  }

  return (
    <main>
      <FileUploader onCsvParse={handleCsvParse} />
      {!!jsonData.headers.length &&
        (<><Dropdown headers={jsonData.headers} changeHeatmapValues={changeHeatmapValues} />
          <Heatmap heatmapValues={heatmapValues} data={jsonData.data} headers={jsonData.headers} /></>)}
    </main>
  )
}

export default App
