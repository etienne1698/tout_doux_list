API endpoints:
- GET /sections (avec 20 taches préchargé)
- GET /sections/{id_section}/tasks?cursor=20

Strategie pour le tri:
- Chaque "task" possède un paramètre "order" (initialement à 10_000), quand on déplace une "task" le paramètre "order" prend la valeur médiane des deux taches adjacente
- Gros avantage en terme de nombre de requêtes à la DB à chaque évolution du kanban (une tache modifier = une tache modifier dans la DB, pas besoin de changer "order" pour toute les tasks de la section)
- Inconveniant: Il faut parfois "renormaliser" les paramètres "order" pour ne pas avoir deux tache qui n'aurait que 1 de différence dans leur "order"

DB:
- sections (id, name, order)
- tasks (id, id_section, name, description, due_date,  order)
- tags (id, name)
- task_tags (id_task, id_tags)