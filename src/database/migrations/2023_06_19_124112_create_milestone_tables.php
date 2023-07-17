<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('milestone_tables', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->comment('ユーザID');
            $table->string('name')->comment('マイルスローン名');
            $table->datetime('due_date')->comment('締切日');
            $table->string('status')->comment('達成ステータス');
            $table->timestamps();


            $table->foreign('user_id')
                ->references('id')
                ->on('users');
        });



    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('milestone_tables');
    }
};
