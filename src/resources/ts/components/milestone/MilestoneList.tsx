import React, { useEffect, useState } from "react";
import axios from "axios";
import MilestoneCard from "./MilestoneCard";
import { Milestone } from "../../types/Milestone";
import parseMilestones from "../../parse/parseMilestones";

const MilestoneList: React.FC = () => {
    const [milestones, setMilestones] = useState<Milestone[]>([]);

    useEffect(() => {
        fetchMilestones();
    }, []);

    const fetchMilestones = async () => {
        try {
            const response = await axios.get("/api/milestone/index");
            const data = response.data;
            console.log(data);
            if (Array.isArray(data)) {
                const parsedMilestones = parseMilestones(data);
                setMilestones(parsedMilestones);
            } else if (typeof data === "object") {
                const parsedMilestones = [parseMilestones(data)];
                setMilestones(parsedMilestones);
            } else {
                console.error("Invalid data format. Expected an array or an object.");
            }
        } catch (error) {
            console.error("Error occurred while fetching milestones:", error);
        }
    };

    return (
        <>
            {milestones.map((milestone) => (
                <MilestoneCard key={milestone.id} {...milestone} />
            ))}
        </>
    );
};

export default MilestoneList;
