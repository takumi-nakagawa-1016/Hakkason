import {Milestone1} from "../../types/Milestone1";

const parseMilestone1 = (data: any): Milestone1[] => {
    if (data) {
        return data.map((item: any) => {
            const milestone: Milestone1 = {
                id: item.id,
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

export default parseMilestone1;
