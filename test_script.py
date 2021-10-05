#!/usr/bin/env python3
"""
script for testing
"""

import sys
import argparse

def main(argv):
    """ main function """
    parser = argparse.ArgumentParser(
        description="script for testing",
    )
    args = parser.parse_args(argv)

    for _ in range(7):
        print("hello")

    return 0

if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))

