import { View } from "react-native";
import { BarChart } from "react-native-chart-kit";

const MyBarChart = ({ ratings }) => {
	const data = {
		labels: ["1", "2", "3", "4", "5"],
		datasets: [
			{
				data: ratings
					? [
							ratings[1].length,
							ratings[2].length,
							ratings[3].length,
							ratings[4].length,
							ratings[5].length,
					  ]
					: [0, 0, 0, 0, 0],
			},
		],
	};

	const chartConfig = {
		backgroundColor: "transparent",
		backgroundGradientFrom: "transparent",
		backgroundGradientTo: "transparent",
		color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
		labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
		style: {
			borderRadius: 16,
			padding: 30,
		},
	};

	return (
		<View style={{ marginLeft: -20 }}>
			<BarChart
				data={data}
				width={334}
				height={220}
				chartConfig={chartConfig}
				withHorizontalLabels={false}
				withInnerLines={false}
				showBarTops={true}
				showValuesOnTopOfBars={true}
			/>
		</View>
	);
};

export default MyBarChart;
