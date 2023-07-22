<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Models\Milestone;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Collection;

class MilestoneRepository implements MilestoneRepositoryInterface
{
    public function storeMilestone(User $user, array $milestone): bool
    {
        return (bool) Milestone::create([
            'user_id' => $user['id'],
            'name' => $milestone['name'],
            'description' => $milestone['description'],
            'due_date' => Carbon::parse($milestone['due_date']),
            'status' => $milestone['status'],
        ]);
    }

    public function updateMilestone(User $user, array $milestone): bool
    {
        $milestone = $this->findMilestone($milestone['id']);
        if (! $milestone) {
            return false;
        }
        $milestone->update([
            'name' => $milestone['name'],
            'description' => $milestone['description'],
            'status' => $milestone['status'],
            'due_date' => Carbon::parse($milestone['due_date']),
        ]);

        return true;
    }

    public function deleteMilestone(Milestone $milestone): bool
    {
        return $milestone->delete();
    }

    public function fetchUserMilestone(User $user): Collection
    {
        return Milestone::query()
            ->where('user_id', $user->id)
            ->get();
    }

    public function findMilestone(string $id): ?Milestone
    {
        return Milestone::query()
            ->find($id)
            ->first();
    }
}
