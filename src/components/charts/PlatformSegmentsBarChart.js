import React from 'react';

import { ResponsiveBar } from '@nivo/bar';

const PlatformSegmentsBarChart = ({ data }) => {
  return (
    <div className="chart-container">
      <ResponsiveBar
        data={data}
        keys={['value']}
        indexBy="segment"
        margin={{ top: 50, right: 130, bottom: 50, left: 120 }}
        padding={0.25}
        layout="horizontal"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={['#0000FF']}
        borderWidth={1}
        borderColor={['#0000FF']}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 1,
          tickRotation: 0,
          legend: 'asset count',
          legendPosition: 'middle',
          legendOffset: 31,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        enableGridX={true}
        enableGridY={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={['#FFFFFF']}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
  );
};

export default PlatformSegmentsBarChart;
