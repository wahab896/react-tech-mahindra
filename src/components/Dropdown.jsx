import React from 'react'

const Dropdown = ({ headers, changeHeatmapValues }) => {

    const handleChange = (e) => {
        changeHeatmapValues({ [e.target.name]: e.target.value })
    }

    return (
        <div className='flex items-center justify-center w-full my-2'>
            <div className='border border-gray-300 rounded-md py-1 px-2 mx-2 '>
                <label className='font-semibold' htmlFor="xaxis" >X: </label>
                <select className='focus:outline-none' name="xAxis" id='xaxis' onChange={handleChange} >
                    <DropDownOptions headers={headers} />
                </select>
            </div>
            <div className='border border-gray-300 rounded-md py-1 px-2 mx-2'>
                <label className='font-semibold' htmlFor="yaxis" >Y: </label>
                <select className='focus:outline-none' name="yAxis" id='yaxis' onChange={handleChange} >
                    <DropDownOptions headers={headers} />
                </select>
            </div>
            <div className='border border-gray-300 rounded-md py-1 px-2 mx-2'>
                <label className='font-semibold' htmlFor="cellvalue" >Cell: </label>
                <select className='focus:outline-none' name="cellValue" id='cellvalue' onChange={handleChange} >
                    <DropDownOptions headers={headers} />
                </select>
            </div>
        </div>
    )
}

export default Dropdown

const DropDownOptions = ({ headers }) => {
    return headers.map(h => {
        if (!h) {
            return (<option value="" selected disabled key="emptyValue">Select Measures</option>)
        }
        return (
            <option key={h} value={h}>{h}</option>
        )
    })
}
