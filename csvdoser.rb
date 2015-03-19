require 'csv'
require 'json'

csv_data = CSV.open('data/cyberbullying_data.csv', headers: true, encoding: "ISO8859-1")

json_data = { data: [] }
headers = []

comment_headers = ['user_id', 'comment', 'creation_time']

csv_data.each_with_index do |row, i|
    obj = {id: i}
    headers = row.headers if i == 0
    comment_list = []
    fields = row.fields
    fields.each_with_index do |e, i2|
        break if i2 > 4
        if not (e.nil? or e == ' ')
            obj[headers[i2]] = e
        end
    end
    obj['comments'] = []
    (5..fields.length - 4).step(3).each do |index|
        if not (fields[index].nil? or fields[index] == ' ')
            comment_obj = {user_id: fields[index], comment: fields[index + 1], creation_time: fields[index + 2]}
            obj['comments'].push(comment_obj)
        end
    end
    json_data[:data].push(obj)
end

File.open('data/cyberbullying_data.json', 'w') { |file| file.write(JSON.pretty_generate(json_data)) }

