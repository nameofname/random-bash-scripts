import gpt_2_simple as gpt2
from get_training_data import build

trainig_data = build()

print('training data ready')

gpt2.download_gpt2(model_name="124M")

print('model downloaded')

# Here's where I would fine tune GPT, but I don't have any tensors :|
