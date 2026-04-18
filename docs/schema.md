### Character
| Pole         | Typ | Wymagane | Opis |
|:-------------| :--- | :--- | :--- |
| `id`         | String/UUID | Tak | Unikalny identyfikator postaci. |
| `imie`       | String | Tak | Imię postaci (np. Muminek). |
| `opis`       | Text | Tak | Krótka charakterystyka postaci. |
| `gatunek`    | String | Tak | Gatunek (np. Muminek, Miukk, Paszczak, Ryjek). |
| `status_snu` | Boolean | Tak | Czy postać aktualnie śpi snem zimowym? (true/false).|

### Artifact

| Pole | Typ | Wymagane | Opis |
| :--- | :--- | :--- | :--- |
| `id` | String/UUID | Tak | Unikalny identyfikator artefaktu. |
| `nazwa` | String | Tak | Nazwa przedmiotu. |
| `opis_wlasciwosci` | Text | Tak | Co robi dany przedmiot (np. „zmienia rzeczy w chmury”). |
| `wlasciciel_id` | String (FK) | Tak | Powiązanie z ID postaci z Rejestru Postaci. |

