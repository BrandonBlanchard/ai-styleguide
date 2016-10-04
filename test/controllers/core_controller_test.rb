require 'test_helper'

class CoreControllerTest < ActionController::TestCase
  test "should get header-box" do
    get :header-box
    assert_response :success
  end

  test "should get link-block" do
    get :link-block
    assert_response :success
  end

  test "should get toggle-box" do
    get :toggle-box
    assert_response :success
  end

  test "should get media-object" do
    get :media-object
    assert_response :success
  end

  test "should get grid" do
    get :grid
    assert_response :success
  end

end
