from docx import Document

class DocxLoader:
    """
    A class to load text from a .docx file.
    """
    def __init__(self, file_path):
        """
        Initialize the DocxLoader with the path to the .docx file.

        Parameters:
        file_path (str): The path to the .docx file.
        """
        self.file_path = file_path

    def load(self):
        """
        Load the text from the .docx file.

        Returns:
        str: The text content of the .docx file.
        """
        doc = Document(self.file_path)
        text = ' '.join([paragraph.text for paragraph in doc.paragraphs])
        return text