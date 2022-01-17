import { METRIC_OPERATIONS } from "./constants"

export function MetricsTab ({ metrics, user }) {
  
  function renderOperationsSelect () {
    return (
      <select name="select">
        {
          METRIC_OPERATIONS.map(operation => {
            return (
              <option value="value1">{operation.label}</option>
            )
          })
        }
      </select>
    )
  }

  function renderMetricsSelect (options) {
    let newOptions = Array.from(options)
    return (
        <select name="select">
            {
                newOptions.map(option => {
                    return (
                        <optgroup key={option[0]} label={option[0]}>
                            {
                                option[1].map(metric => {
                                    return (
                                        <option key={metric.name} value={metric.code}>{metric.name}</option>
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

  return (
      <div id="Metrics" className="tabcontent">
      { renderMetricsSelect(metrics) }
      { renderOperationsSelect() }
    </div>
  )
}