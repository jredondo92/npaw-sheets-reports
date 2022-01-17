import { useState, Fragment } from 'react'
import { DimensionsTab, MetricsTab, SamplesTab } from './components'
import { useDimensions, useMetrics, useSamples, useUser } from '@Hooks'

export function FiltersWizard () {
    const [selectedTab, setSelectedTab] = useState(0)
    const { isMounting: isMountingUser, user } = useUser();
    const { isLoading: isLoadingDimensions, dimensions } = useDimensions();
    const { isLoading: isLoadingMetrics, metrics } = useMetrics();

    const TABS = [
        {
            label: 'Dimensions',
            content: () => <DimensionsTab dimensions={groupBy(dimensions, dimension => dimension.category)} user={user} />
        },
        {
            label: 'Metrics',
            content: () => <MetricsTab metrics={groupBy(metrics, metric => metric.category)} user={user} />
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
                className="tablinks"
                onClick={(event) => setSelectedTab(index)}
            >
                {tab.label}
            </button>
        ))
    }

    function groupBy(list, keyGetter) {
        const map = new Map();
        list.forEach((item) => {
             const key = keyGetter(item);
             const collection = map.get(key);
             if (!collection) {
                 map.set(key, [item]);
             } else {
                 collection.push(item);
             }
        });
        return map;
    }

    function renderTabContent () {
        return TABS[selectedTab].content()
    }

    if (isLoadingDimensions || isLoadingMetrics || isMountingUser) {
        return 'Loading Everything!!!';
    }

    return (
        <div>
            <h1>FILTERS WIZARD</h1>
            { renderTabs() }
            { renderTabContent() }
        </div>
    )
}