require 'rubygems'
require 'rest-client'
require 'nokogiri'

url = "http://internshala.com/internships/"
departments = ["engineering", "mba", "media", "graphic design", "humanities", "science", "law", "architecture", "government"]

begin
  department_list = []
  departments.each do |department|
    1000.times do |i|
      begin
        reader = Nokogiri::HTML RestClient.get("#{url}#{department}-internship/page-#{i + 1}")
        break if reader.css("div.individual_internship").count < 10
      	reader.css("div.individual_internship").each do |d|
      		department_obj = {}
      		department_obj[:field] = d.css('h4[title]').text.strip
      		department_obj[:company] = d.css('div.table-cell h4 a').text.strip
          department_obj[:employment_type] = d.css("span a")[0].text.strip if d.css("span a").length > 0
					puts d
      		puts department_obj
    			department_list.push department_obj
      	end
      rescue => error
        puts "Some error #{error.class} #{error.message}"
      end
    end
  	puts department_list.count
  end
rescue => error
	puts "Exception #{error.class} #{error.name}"
  File.open("sample.json", 'w') { |file| file.write(department_list.to_json) }
end

File.open("sample.json", 'w') { |file| file.write(department_list.to_json) }

