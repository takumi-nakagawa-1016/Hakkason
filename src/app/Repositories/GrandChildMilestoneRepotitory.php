<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Models\GrandChildMilestone;
use Carbon\Carbon;
use Illuminate\Support\Collection;


class GrandChildMilestoneRepotitory implements GrandChildMilestoneRepositoryInterface
{
    public function storeGrandChild(array $grandChild): bool
    {
        return (bool)GrandChildMilestone::create([
            'child_milestone_id' => $grandChild['child_milestone_id'],
            'name' => $grandChild['name'],
            'description' => $grandChild['description'],
            'status' => $grandChild['status'],
            'due_date' => Carbon::parse($grandChild['due_date']),
        ]);
    }

    public function updateGrandChild(GrandChildMilestone $grandChild): bool
    {
        return $grandChild->update();
    }

    public function deleteGrandChild(GrandChildMilestone $grandChild): bool
    {
        return $grandChild->delete();
    }

    public function findGrandChild(string $id): GrandChildMilestone
    {
        return GrandChildMilestone::query()
            ->find($id)
            ->first();
    }

    public function fetchGrandChildOfChild(string $childMilestoneId): Collection
    {
        return GrandChildMilestone::query()
            ->where('child_milestone_id', $childMilestoneId)
            ->get();
    }
}
