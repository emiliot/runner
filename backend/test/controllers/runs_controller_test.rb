require 'test_helper'

class RunsControllerTest < ActionController::TestCase
  setup do
    @run = runs(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:runs)
  end

  test "should create run" do
    assert_difference('Run.count') do
      post :create, run: {  }
    end

    assert_response 201
  end

  test "should show run" do
    get :show, id: @run
    assert_response :success
  end

  test "should update run" do
    put :update, id: @run, run: {  }
    assert_response 204
  end

  test "should destroy run" do
    assert_difference('Run.count', -1) do
      delete :destroy, id: @run
    end

    assert_response 204
  end
end
