import * as React from "react";

import Navbar from "./ui/Navbar";

export default function Dashboard() {
// Dashboard page is to give the user a quick insight of their profit and inventory. The important aspects of their data.
// It will not give specifics, but a summary of the data.

// TODO: Set up blueprint for Grid system
// TODO: Create a box that will show the summary of last months inventory sold, total expenses, total of sold items, and profit.
// TODO: Create a box that will show the summary of the current month that will be with be updated with each change.
// TODO: Create a bar graph (2 ideas).
    // ? 1st idea: Bar Graph that shows the expenses and total sold for each month in the current year. Expenses would be a red bar and total sold would be a green bar
    // ? 2nd idea: Bar Graph that only shows profit. If the profit is positive the bar will be in the positive quadrant 1 amd if profit is negative then the bar will be in y negative quadrant 4.
// Refer to the drawn up figures in book to see the design of the page.

    return (
        <div id="dashboardPage"> 
        {<Navbar />}
        </div>
    )
}