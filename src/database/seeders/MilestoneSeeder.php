<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MilestoneSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('milestones')->insert([
            [
                'id' => 1,
                'user_id' => 1,
                'name' => '一流エンジニアになる',
                'description' => '一流エンジニアになる。',
                'status' => 30,
                'due_date' => Carbon::parse('2023-08-01'),

            ],
            [
                'id' => 2,
                'user_id' => 1,
                'name' => '世界一周する',
                'description' => '40歳までに世界１周する',
                'status' => 20,
                'due_date' => Carbon::parse('2023-08-03'),
            ],
            [
                'id' => 3,
                'user_id' => 1,
                'name' => 'ハッカソン提出',
                'description' => '全然間に合わないよ！！',
                'status' => 20,
                'due_date' => Carbon::parse('2023-08-03'),
            ],
        ]);
    }
}
