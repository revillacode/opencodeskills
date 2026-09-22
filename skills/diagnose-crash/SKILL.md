---
name: diagnose-crash
description: Use when a Linux application crashes, segfaults, aborts, disappears, produces a core dump, or requires coredumpctl and backtrace analysis.
license: MIT
compatibility: Linux systems with systemd-coredump and a debugger such as gdb or lldb.
---

# Linux Crash Diagnosis

Turn a crash report into a reproducible, evidence-based diagnosis without
guessing from a single log line.

## Workflow

1. Confirm the process, approximate time, signal, and whether a core dump was
   captured.
2. List matching dumps with `coredumpctl list` and inspect metadata before
   extracting anything.
3. Capture a symbolic backtrace with `coredumpctl debug` or a debugger using
   the exact executable and matching debug symbols.
4. Separate application frames, library frames, and signal-handler frames.
5. Correlate the backtrace with journal logs, package versions, recent updates,
   hardware state, and a minimal reproduction.
6. Report confidence, likely root cause, evidence, and the next diagnostic
   experiment.

## Evidence Quality

Treat `??` frames, stripped binaries, stale cores, and incomplete logs as
limitations. Do not claim a root cause when the backtrace only proves where
the process stopped. Record commands and relevant version information so
another person can reproduce the analysis.

## Safety

Use read-only diagnostic commands first. Core dumps can contain credentials and
private data; store extracted traces securely and redact secrets before sharing
them. Do not delete dumps or change crash-capture policy unless requested.
