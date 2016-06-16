require "capybara/rspec"
require_relative "../../../app"

Capybara.app = CountApp

feature "serve web app" do
  scenario "should serve home page" do
    visit("/")
    expect(page).to have_content 'Increment'
  end
end

feature "retrieve a count as json" do
  scenario "should be able to return a count of 0" do
    visit("/count")
    expect(page).to have_content '{"count":"0"}'
  end
end

feature "set a count" do
  scenario "should be able to set count to 15" do
    page.driver.post("/count?count=15")

    visit("/count")
    expect(page).to have_content '{"count":"15"}'
  end
end
