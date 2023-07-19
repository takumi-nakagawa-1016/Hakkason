<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\Milestone;
use App\Models\User;
use App\Repositories\MilestoneRepositoryInterface;
use App\Repositories\UserRepositoryInterface;

class MilestoneService implements MilestoneServiceInterface
{
    public function __construct(
        private MilestoneRepositoryInterface $milestoneRepository,
        private UserRepositoryInterface $userRepository,

    )
    {}

    public function storeMilestone(
        string $name,
        string $description,
        string $dueDate,
    ): bool
    {
        $milestone = [
            'name' => $name,
            'description' => $description,
            'status' => 0,
            'due_date' => $dueDate,
        ];

        $user = $this->userRepository->fetchAuthUser();
        return $this->milestoneRepository->storeMilestone($user, $milestone);
    }

    public function updateMilestone(
        string $id,
        string $name,
        string $description,
        string $status,
        string $dueDate,
    ): bool
    {
        $milestone = [
            'id' => $id,
            'name' => $name,
            'description' => $description,
            'status' => $status,
            'due_data' => $dueDate,
        ];
        $user = $this->userRepository->fetchAuthUser();
        return $this->milestoneRepository->updateMilestone($user, $milestone);
    }

    public function deleteMilestone(string $id): bool
    {
        $milestone = $this->milestoneRepository->findMilestone($id);
        return $this->milestoneRepository->deleteMilestone($milestone);
    }

    public function fetchUserMilestone(): string
    {
        $user = $this->userRepository->fetchAuthUser();
        $milestones = $this->milestoneRepository->fetchUserMilestone($user);
        return json_encode($milestones->toArray());
    }

    public function findMilestone(Milestone $milestone): Milestone
    {
        return $this->findMilestone($milestone);
    }
}