import chromadb
from sentence_transformers import SentenceTransformer

model = SentenceTransformer('all-MiniLM-L6-v2')
db = chromadb.Client()

documents = [
    "Machine learning is a subset of artificial intelligence",
    "Deep learning uses neural networks with many layers",
    "Web development includes frontend and backend technologies",
    "Data science involves statistics, python, and machine learning",
    "Artificial intelligence is transforming software engineering"
]

embeddings = model.encode(documents).tolist()

collection = db.create_collection(name="doc_demo")
collection.add(
    documents=documents,
    embeddings=embeddings,
    ids=[str(i) for i in range(len(documents))]
)

query = "Brocolli is good for health"

query_embedding = model.encode([query]).tolist()

results = collection.query(
    query_embeddings = query_embedding,
    n_results = 3
)

print(results)