import os
import json
import twitter_api as twitter
import bigquery_api as bigquery

def pp(o):
    return print(json.dumps(o, indent=4, sort_keys=True))

# # First we delete all the existing rules and set up a rule for luxury :
pp(twitter.delete_all_rules())
rules = twitter.set_rules([
    { "value": "luxury has:images", "tag": "luxury with img"},
    # { "value": "cat has:images", "tag": "cat with img"},
    # { "value": "dog has:images", "tag": "dog with img"}
])
pp(rules)

def store_rec(rec):
    print ('ima gonna store it', rec)
    return bigquery.store_record(rec, 'twitter_luxury')

# Then we stream tweets, and pass a callback to write to bigquery :
twitter.get_stream(store_rec)
