import "./Dashboard.css";
import React, { useEffect, useState } from "react";
import users from "../../assets/static/users";
import workout_data from "../../assets/static/workouts_data";
import PieChart from "../../components/Charts/PieChart/PieChart";
import BarChart from "../../components/Charts/BarChart/BarChart";
import CardChart from "../../components/Charts/CardChart/CardChart";
import DonutChart from "../../components/Charts/DonutChart/DonutChart";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    users: users,
    workouts: workout_data,
    pie_data: [],
    bar_data: [],
    donut_data: [],
    changes:false
  });
  const get_gender_ratio = (users) => {
    let maleCount = 0;
    let femaleCount = 0;

    users.forEach((user) => {
      if (user.gender === "male") {
        maleCount++;
      } else if (user.gender === "female") {
        femaleCount++;
      }
    });

    return [
      { gender: "Male", value: maleCount, color: "#118ab2" },
      {
        gender: "Female",
        value: femaleCount,
        color: "#ef476f",
      },
    ];
  };
  const get_gender_freq = (users) => {
    let ageGroups = {
      "0-20": 0,
      "20-30": 0,
      "30-40": 0,
      "40-50": 0,
      "50-60": 0,
      "60+": 0,
    };

    users.forEach((user) => {
      const age = user.age;
      if (age >= 0 && age <= 20) {
        ageGroups["0-20"]++;
      } else if (age > 20 && age <= 30) {
        ageGroups["20-30"]++;
      } else if (age > 30 && age <= 40) {
        ageGroups["30-40"]++;
      } else if (age > 40 && age <= 50) {
        ageGroups["40-50"]++;
      } else if (age > 50 && age <= 60) {
        ageGroups["50-60"]++;
      } else {
        ageGroups["60+"]++;
      }
    });

    return [
      { label: "0-20", value: ageGroups["0-20"], color: "#264653" },
      { label: "20-30", value: ageGroups["20-30"], color: "#2a9d8f" },
      { label: "30-40", value: ageGroups["30-40"], color: "#8ab17d" },
      { label: "40-50", value: ageGroups["40-50"], color: "#e9c46a" },
      { label: "50-60", value: ageGroups["50-60"], color: "#f4a261" },
      { label: "60+", value: ageGroups["60+"], color: "#e76f51" },
    ];
  };
  const get_equipment_ratio = (workouts) => {
    const equipmentCount = {};
    const donut_colors = [
      "#303638",
      "#f0c808",
      "#5d4b20",
      "#469374",
      "#9341b3",
      "#e3427d",
      "#e68653",
      "#ebe0b0",
      "#edfbba",
    ];

    // Loop through each workout
    workouts.forEach((workout) => {
      const { equipment } = workout;

      // If equipment is an array, loop through each equipment item
      if (Array.isArray(equipment)) {
        equipment.forEach((item) => {
          // If equipment item already exists in the count, increment its count
          if (equipmentCount[item]) {
            equipmentCount[item]++;
          } else {
            // Otherwise, initialize its count to 1
            equipmentCount[item] = 1;
          }
        });
      } else {
        // If equipment is not an array, increment its count
        if (equipmentCount[equipment]) {
          equipmentCount[equipment]++;
        } else {
          equipmentCount[equipment] = 1;
        }
      }
    });

    return Object.entries(equipmentCount).map(([key, value], index) => {
      return {
        label: key,
        value: value,
        color: donut_colors[index],
      };
    });
  };
  useEffect(() => {
    const pieData = get_gender_ratio(users);
    const barData = get_gender_freq(users);
    const donutData = get_equipment_ratio(workout_data);

    setDashboardData((prevData) => ({
      ...prevData,
      pie_data: pieData,
      bar_data: barData,
      donut_data: donutData,
    }));
  }, [dashboardData.users, dashboardData.workouts]);

  return (
    <div className="dashboard">
      <div>
        <h3 className="dasboard-header">Dashboard</h3>
      </div>
      <div className="dasboard-charts">
        <PieChart data={dashboardData.pie_data} title="Gender Ratio" />
        <BarChart data={dashboardData.bar_data} title="Age Range" />
        <CardChart title="Total Users" value={dashboardData.users.length} />
        <DonutChart data={dashboardData.donut_data} title="Equipmet Usage" />
      </div>
    </div>
  );
};

export default Dashboard;
