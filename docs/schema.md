### Character
| Pole | Typ | Wymagane | Opis |
| :--- | :--- | :--- | :--- |
| `imie` | String | Tak | Imię postaci (np. Muminek). |
| `opis` | String | Tak | Krótka charakterystyka postaci. |
| `gatunek` | String | Tak | Gatunek (np. Muminek, Miukk, Paszczak). |
| `status_snu` | Boolean | Tak | Czy postać aktualnie śpi snem zimowym? |
| `przyjaciel_id` | ObjectId | Nie | Powiązanie z ID innej postaci. |

### Artifact
| Pole | Typ | Wymagane | Opis |
| :--- | :--- | :--- | :--- |
| `nazwa` | String | Tak | Nazwa przedmiotu. |
| `opis_wlasciwosci` | String | Tak | Co robi dany przedmiot. |
| `wlasciciel_id` | ObjectId | Tak | Powiązanie z ID postaci (właściciela). |

### Logika Relacji

* **Łączenie:** Używamy `ObjectId`. To unikalny kod, który łączy przedmiot z konkretną postacią.
* **Usuwanie:** Jeśli postać zostanie usunięta, jej przedmioty zostają w bazie, ale mają pustego właściciela (`null`).
* **Spójność:** Każdy wpis musi mieć imię/nazwę. Bez tego baza odrzuci dane.