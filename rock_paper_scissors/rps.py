#!/usr/bin/python

import sys

def rock_paper_scissors(n):
  add = ['rock', 'paper', 'scissors']
  result = []

  def rps_results_adder(n, play):
    if n == 0:
      return result.append(play)
    for i in add:
      rps_results_adder(n-1, play + [i])

  rps_results_adder(n, [])
  print("Result is:", result)
  return result


# rock_paper_scissors(2)

# if __name__ == "__main__":
#   if len(sys.argv) > 1:
#     num_plays = int(sys.argv[1])
#     print(rock_paper_scissors(num_plays))
#   else:
#     print('Usage: rps.py [num_plays]')