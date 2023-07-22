<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class GrandChildMilestoneRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            //
        ];
    }

    public function getId(): string
    {
        return $this->input('id');
    }

    public function getChileMilestoneId(): string
    {
        return $this->input('child_milestone_id');
    }

    public function getName(): string
    {
        return $this->input('name');
    }

    public function getDescription(): string
    {
        return $this->input('description');
    }

    public function getStatus(): string
    {
        return $this->input('status');
    }

    public function getDueDate(): string
    {
        return $this->input('due_date');
    }

}
