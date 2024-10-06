import "./ChartPage.css"
import { RaderChart } from "./RaderChart"

export function ChartPage(): JSX.Element {
    return <div className="bg-gray w-screen h-screen">
        <RaderChart />
    </div>
}