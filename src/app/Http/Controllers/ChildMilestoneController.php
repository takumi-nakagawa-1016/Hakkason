<?php

namespace App\Http\Controllers;

use App\Http\Requests\ChildMilestoneRequest;
use App\Models\ChildMilestone;
use App\Services\ChildMilestoneServiceInterface;

class ChildMilestoneController extends Controller
{
    public function __construct(
        private ChildMilestoneServiceInterface $childMilestoneService,
    )
    {}

    public function childStore(ChildMilestoneRequest $request)
    {
        $result = $this->childMilestoneService->storeChild(
            $request->getMilestoneId(),
            $request->getName(),
            $request->getDescription(),
            $request->getDueDate(),
        );

        return response()->json($result);

    }

    public function childUpdate(ChildMilestoneRequest $request)
    {
        $result = $this->childMilestoneService->updateChild(
            $request->getId(),
            $request->getName(),
            $request->getDescription(),
            $request->getStatus(),
            $request->getDueDate(),
        );

        return response()->json($result);
    }

    public function childDelete(ChildMilestoneRequest $request)
    {
        $result = $this->childMilestoneService->deleteChild(
            $request->getId(),
        );

        return response()->json($result);
    }
}
