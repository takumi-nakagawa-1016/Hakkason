<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\Milestone;
use App\Models\User;
use App\Repositories\MilestoneRepositoryInterface;
use app\Repositories\UserRepositoryInterface;
use Illuminate\Support\Collection;

class MilestoneService implements MilestoneServiceInterface
{
    public function __construct(
        private MilestoneRepositoryInterface $milestoneRepository,
        private UserRepositoryInterface $userRepository,

    )
    {}

    public function storeMilestone(array $milestone): bool
    {
        $user = $this->userRepository->fetchAuthUser();
        return $this->milestoneRepository->storeMilestone($user, $milestone);
    }

    public function updateMilestone(array $milestone): bool
    {
        $user = $this->userRepository->fetchAuthUser();
        return $this->milestoneRepository->updateMilestone($user, $milestone);
    }

    public function deleteMilestone(Milestone $milestone): bool
    {
        return $this->milestoneRepository->deleteMilestone($milestone);
    }

    public function fetchUserMilestone(User $uesr): Collection
    {
        $user = $this->userRepository->fetchAuthUser();
        return $this->milestoneRepository->fetchUserMilestone($user);
    }

    public function findMilestone(Milestone $milestone): Milestone
    {
        return $this->findMilestone($milestone);
    }
}