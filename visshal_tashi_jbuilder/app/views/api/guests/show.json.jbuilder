json.partial! 'api/guests/guest', guest: @guest
json.extract! @guest, :gifts