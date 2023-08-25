from pathlib import Path
result = [f.name for f in Path(Path.cwd()).iterdir()]
print(result)