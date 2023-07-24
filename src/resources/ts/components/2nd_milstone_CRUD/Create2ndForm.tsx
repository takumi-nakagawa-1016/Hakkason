import React from "react";
import { Milestone } from "../../types/Milestone";
import { Box, Button, FormControl, FormLabel, Input, Stack, Flex } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Milestone2nd} from "../../types/2ndMilestone";

interface CreateFormProps {
    milestone: Milestone2nd;
    setMilestone: React.Dispatch<React.SetStateAction<Milestone2nd>>;
}

const Create2ndForm: React.FC<CreateFormProps> = ({ milestone, setMilestone }) => {
    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        console.log()
        setMilestone((prevMilestone) => ({
            ...prevMilestone,
            [name]: value,
        }));

    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const csrfToken = document.querySelector<HTMLMetaElement>('meta[name="csrf-token"]')?.content;
            if (!csrfToken) {
                console.error("CSRF token not found.");
                return;
            }
            console.log(csrfToken)

            const response = await axios.post("/api/child-milestone/store", milestone, {
                headers: {
                    "X-CSRF-TOKEN": csrfToken,
                },
            });
            console.log(response.data)
            if (response.status === 200) {
                // リクエストが成功した場合の処理
                const data = response.data;
                console.log("Milestone created successfully:", data);
                // 成功したら、何かの処理を追加する
                navigate(`/index/milestone2nd/${milestone.milestone_id}`);
            } else {
                // リクエストが失敗した場合の処理
                console.error("Failed to create Milestone");
                // エラー処理を追加する
            }
        } catch (error) {
            console.error("Error occurred while creating Milestone:", error);
            // エラー処理を追加する
        }
    };

    return (
        <Flex align="center" justify="center">
            <Box as="form" onSubmit={handleSubmit}>
                <Stack spacing={4}>
                    <FormControl>
                        <FormLabel>Name:</FormLabel>
                        <Input type="text" name="name" value={milestone.name} onChange={handleChange} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Description:</FormLabel>
                        <Input type="textarea" name="description" value={milestone.description || ""} onChange={handleChange} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Status:</FormLabel>
                        <Input type="number" name="status" value={milestone.status} onChange={handleChange} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Deadline:</FormLabel>
                        <Input type="date" name="due_date" value={milestone.due_date} onChange={handleChange} />
                    </FormControl>
                    <input type="hidden" name="milestone_id" value={milestone.milestone_id} />
                    <Button type="submit">Create Milestone</Button>
                </Stack>
            </Box>
        </Flex>
    );
};

export default Create2ndForm;
