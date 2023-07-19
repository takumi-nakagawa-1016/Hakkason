<?php

namespace App\Http\Controllers;

use App\Http\Requests\MilestoneRequest;
use App\Services\MilestoneServiceInterface;
use Illuminate\Http\Request;

class MilestoneController extends Controller
{
    public function __construct(
        private MilestoneServiceInterface $milestoneService,
    )
    {

    }

    public function index()
    {
        $milestones = $this->milestoneService->fetchUserMilestone();
        return response()->json($milestones);
    }

    public function store(MilestoneRequest $request)
    {

        $response = $this->milestoneService->storeMilestone(
            $request->getName(),
            $request->getMilestoneContent(),
            $request->getDeadLine(),
        );

        return response()->json($response);
    }

    public function update(MilestoneRequest $request)
    {
        $response = $this->milestoneService->updateMilestone(
            $request->getId(),
            $request->getName(),
            $request->getMilestoneContent(),
            $request->getStatus(),
            $request->getDeadLine(),
        );

        return response()->json($response);
    }

    public function delete(MilestoneRequest $request)
    {
        $response = $this->milestoneService->deleteMilestone(
            $request->getId(),
        );

        return $response->json($response);
    }
}
