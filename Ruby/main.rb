require 'json'
files_json = []
Dir.glob("../tips/*.md") { |file|
    content = File.open(file, "r").read
    file_object = {
        :hastags => content.scan(/#\w+/).flatten, 
        :tip => content.gsub(/#\w+/, "").force_encoding('utf-8').strip()
    }
    files_json.push(file_object)
}
puts files_json.to_json()