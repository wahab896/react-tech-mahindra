import React, { useEffect } from 'react'
import { VegaLite } from 'react-vega';

const Heatmap = ({ data = [], heatmapValues, headers }) => {

    if (!heatmapValues.xAxis || !heatmapValues.yAxis || !heatmapValues.cellValue) {
        return <div className='flex items-center justify-center w-full'>Kindly select the measures</div>
    }

    const getTooltip = () => {
        return headers.map(h => {
            return { field: h, type: 'ordinal', title: h }
        });
    }

    const spec = {
        "autosize": { "resize": true, "type": "fit" },
        data: {
            values: data,
        },
        "encoding": {
            "x": {
                "field": heatmapValues.xAxis,
                "type": "ordinal",
                "axis": { "title": "X Axis" }
            },
            "y": {
                "field": heatmapValues.yAxis,
                "type": "ordinal",
                "axis": { "title": "Y Axis" }
            },
            tooltip: getTooltip()
        },
        "layer": [
            {
                "mark": { "type": "rect", "tooltip": true },
                "encoding": {
                    "color": {
                        "field": heatmapValues.cellValue,
                        "type": "ordinal",
                        "legend": null,
                        "scale": { "scheme": "redyellowgreen" }
                    },
                    "text": { "field": heatmapValues.cellValue }
                }
            }
        ],
    };

    return (
        <div className='flex items-center justify-center w-full'>
            <VegaLite spec={spec} actions={false} />
        </div>
    )
}

export default Heatmap