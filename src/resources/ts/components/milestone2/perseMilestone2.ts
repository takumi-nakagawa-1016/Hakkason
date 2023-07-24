import {Milestone1} from "../../types/Milestone1";
import {Milestone2} from "../../types/Milestone2";

const parseMilestone2 = (data: any): Milestone2[] => {
    if (data) {
        return data.map((item: any) => {
            const milestone: Milestone2 = {
                id: item.id,
                milestone_id: item.milestone_id,
                name: item.name,
                description: item.description || null,
                status: item.status,
                due_date: item.due_date,
            };
            return milestone;
        });
    } else {
        console.error("Invalid data format. Expected an array.");
        return [];
    }
};

export default parseMilestone2;
