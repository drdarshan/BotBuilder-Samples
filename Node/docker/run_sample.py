#!/usr/bin/env python
import subprocess
import argparse

if __name__ == "__main__":
    import glob
    import os
    import sys
    
    examples = sorted([os.path.split(app)[0] for app in glob.glob("*/app.js")])
    parser = argparse.ArgumentParser(usage = "run_sample.py sample_name. The argument sample_name is required and can be one of:\n"+"\n".join(examples))
    
    parser.add_argument("example", help = "Name of the example")
    args = parser.parse_args()
    if args.example not in examples:
        print "The sample to run must be one of:"
        print "\n".join(examples)
        sys.exit(-1)
    try:
        sys.exit(subprocess.call(["node", os.path.join(args.example, "app.js")])) #, ))
    except KeyboardInterrupt:
        sys.exit(0)

    
