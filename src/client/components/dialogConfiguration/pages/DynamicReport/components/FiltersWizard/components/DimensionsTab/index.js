import { useState, useEffect } from 'react'

import { DIMENSION_OPTIONS } from './constants';

import { serialize } from '../../helpers';

export function DimensionsTab ({ dimensions, user }) {
    const [values, setValues] = useState([])

    async function fetchValues (dimension) {
        const params = {
            metrics: 'playsAndSessions',
            granularity: 'none',
            type: 'all',
            //filter: [{"name":"uniquefilter","rules":{}}],
            groupBy: dimension,
            orderBy: 'playsAndSessions',
            limit: 100,
            orderDirection: 'desc',
            fromDate: 'last15days',
            toDate: '',
            operation: 'reduceDisjoin',
            forceEmptyString: true,
            recursiveDate: true
        }

        const response = await window.fetch(`https://fast.youbora.com/devyoubora/data?${serialize(params)}&token=${user.token}`);
  
        const json = await response.json();
        setValues(json.data[0].metrics[0].values.map(dimensionValue => dimensionValue[dimension]))
    }

    function renderSelect (options) {
        let newOptions = Array.from(options)
        return (
            <select name="select" onChange={ev => fetchValues(ev.target.value)}>
                {
                    newOptions.map(option => {
                        return (
                            <optgroup key={option[0]} label={option[0]}>
                                {
                                    option[1].map(dimension => {
                                        return (
                                            <option key={`${option[0]}_${dimension.name}`} value={dimension.code}>{dimension.name}</option>
                                        )
                                    })
                                }
                            </optgroup>
                        )
                    })
                }
            </select>    
        )
    }

    function renderOptionSelect () {
        return (
            <select name="select">
                {
                    DIMENSION_OPTIONS.map(option => {
                        return (
                            <option value={option.value}>{option.label}</option>
                        )
                    })
                }
            </select>
        )
    }

    function renderValues () {
        return (
            <ul
                style={{
                    height: '200px',
                    overflowY: 'auto',
                    border: '1px solid gray'
                }}
            >
                {
                    values.map(value => {
                        return (
                            <li>
                                <label>
                                    <input type="checkbox" id="cbox1" value="first_checkbox" /> {value}
                                </label>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    return (
        <div id="Dimensions" className="tabcontent">
            { renderOptionSelect() }
            { renderSelect(dimensions) }

            <input type="search" id="gsearch" name="gsearch" placeholder="Search" />
            { renderValues() }
        </div>
    )
}