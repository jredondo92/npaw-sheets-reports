import { useState, Fragment } from 'react'
import { DimensionsTab, MetricsTab, SamplesTab } from './components'
export function FiltersWizard () {
    const [selectedTab, setSelectedTab] = useState(0)
    
    const TABS = [
        {
            label: 'Dimensions',
            content: DimensionsTab
        },
        {
            label: 'Metrics',
            content: MetricsTab
        },
        {
            label: 'Samples',
            content: SamplesTab
        }
    ]

    function renderTabs () {
        return TABS.map((tab, index) => (
            <button
                key={`tab_${tab.label}`}
                class="tablinks"
                onClick={(event) => setSelectedTab(index)}
            >
                {tab.label}
            </button>
        ))
    }

    function renderTabContent () {
        return TABS[selectedTab].content()
    }

    return (
        <div>
            <h1>FILTERS WIZARD</h1>
            { renderTabs() }
            { renderTabContent() }
        </div>
    )
}